import HttpClient from "../network/http";
import {
  GenieService,
  ProductT,
  CategoryT,
  CharacterNames,
  CharacterItem,
  GenieAttributes,
  UserAttributes,
} from "../interface";
import TokenStorage from "../db/token";
import {
  defaultGenie,
  defaultCharacters,
  defaultBackgrounds,
} from "../db/default";

export default class MyGenieService implements GenieService {
  private wish: ProductT[];
  private cart: ProductT[];
  private tempCharacters: CharacterItem[];
  private tempGenie: UserAttributes;
  private http: HttpClient;
  private tokenStorage: TokenStorage;
  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.wish = [];
    this.cart = [];

    this.tempCharacters = defaultCharacters;
    this.tempGenie = defaultGenie;
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  async getGenie(username: string) {
    if (username === "genie") {
      return this.tempGenie;
    } else {
      return this.http.fetch(`/genie?username=${username}`, {
        method: "GET",
        headers: this.getHeaders(),
      });
    }
  }

  async updateGenie(username: string, attribute: GenieAttributes) {
    if (username === "genie") {
      if (this.tempGenie && attribute.dotori) {
        this.tempGenie.dotori = attribute.dotori;
      }
      if (this.tempGenie && attribute.today) {
        this.tempGenie.today = attribute.today;
      }
    } else {
      return this.http.fetch(`/genie?username=${username}`, {
        method: "PUT",
        headers: this.getHeaders(),
        body: JSON.stringify(attribute),
      });
    }
  }

  async getCharacters(username: string) {
    if (username === "genie") {
      return this.tempCharacters;
    } else {
      return this.http.fetch(`/characters?username=${username}`, {
        method: "GET",
        headers: this.getHeaders(),
      });
    }
  }

  async addCharacters(username: string, list: ProductT[], id: string) {
    const characters = ["genie", "hipster", "lazy", "tiger"];
    const purchasedCharacters: CharacterRequestT[] = [];

    list.forEach((item) => {
      if (characters.includes(item.type)) {
        const result = loadDefaultAttr(item.type as CharacterNames);
        result && purchasedCharacters.push({ ...result, username, id });
      }
    });

    if (username === "genie") {
      purchasedCharacters.forEach((item) => this.tempCharacters.push(item));
    } else {
      return this.http.fetch(`/characters`, {
        method: "POST",
        body: JSON.stringify(purchasedCharacters),
        headers: this.getHeaders(),
      });
    }
  }

  async updateCharacter(updated: CharacterItem) {
    return this.http.fetch(`/characters/${updated.id}`, {
      method: "PUT",
      body: JSON.stringify(updated),
      headers: this.getHeaders(),
    });
  }

  async getProducts() {
    return this.http.fetch("/products", {
      method: "GET",
    });
  }

  fetchBackground() {
    //[todo]
    return defaultBackgrounds;
  }

  onAddCart(product: ProductT) {
    this.cart.push(product);
  }

  onAddWish(product: ProductT) {
    this.wish.push(product);
  }

  onDeleteCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  emptyCart() {
    this.cart = [];
  }

  onDeleteWish(id: number) {
    this.wish = this.wish.filter((item) => item.id !== id);
  }

  getCartList() {
    return this.cart;
  }

  getWishList() {
    return this.wish;
  }

  onCategorySearch(category: CategoryT) {
    return this.http.fetch(`/products?category=${category}`, {
      method: "GET",
    });
  }

  onKeywordSearch(keyword: string) {
    return this.http.fetch(`/products?keyword=${keyword}`, {
      method: "GET",
    });
  }
}

function loadDefaultAttr(name: CharacterNames): CharacterItem | undefined {
  switch (name) {
    case "hipster":
      return hipsterAttr;
    case "tiger":
      return tigerAttr;
    case "genie":
      return genieAttr;
    case "lazy":
      return lazyAttr;
    default:
      return;
  }
}

const hipsterAttr: CharacterItem = {
  type: "hipster" as CharacterNames,
  body: "#a37a63",
  face: "#2f1d15",
  hair: "#391d12",
  top: "#cccccc",
  pattern: "#fc1e00",
  pants: "#282828",
  cap: "#20ba9c",
  shoes: "#eaeaea",
};

const tigerAttr: CharacterItem = {
  type: "tiger" as CharacterNames,
  body: "#edc5a9",
  face: "#513e3a",
  top: "#f2af06",
  pattern: "#e8c89e",
};

const lazyAttr: CharacterItem = {
  type: "lazy" as CharacterNames,
  body: "#feeac1",
  face: "#a59886",
  hair: "#06c2ff",
  top: "#e1d1e1",
  pattern: "#ede2ed",
  cap: "#e3d0e1",
  shoes: "#baa4b9",
};

const genieAttr: CharacterItem = {
  type: "genie" as CharacterNames,
  body: "#7bcef8",
  face: "#513e3a",
  hair: "#2f1d15",
  pants: "#dc001c",
  accessories: "#ffb619",
};

interface CharacterRequestT extends CharacterItem {
  username: string;
}
