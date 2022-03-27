import { Howl } from "howler";
import AuthService from "./service/authService";

export type CategoryT = "music" | "character" | "furniture" | "all";

export interface GenieService {
  getGenie: (username: string) => Promise<UserAttributes>;
  updateGenie: (
    username: string,
    attribute: GenieAttributes
  ) => Promise<UserAttributes>;

  getCharacters: (username: string) => Promise<CharacterItem[]>;
  addCharacters: (
    username: string,
    list: ProductT[],
    id: string
  ) => Promise<CharacterItem[]>;
  updateCharacter: (updated: CharacterItem) => Promise<CharacterItem>;

  getWishList: () => ProductT[];
  onAddWish: (product: ProductT) => void;
  onDeleteWish: (id: number) => void;

  getCartList: () => ProductT[];
  onAddCart: (product: ProductT) => void;
  onDeleteCart: (id: number) => void;
  emptyCart: () => void;

  getProducts: () => Promise<ProductT[]>;
  onCategorySearch: (category: CategoryT) => Promise<ProductT[]>;
  onKeywordSearch: (keyword: string) => Promise<ProductT[]>;

  fetchBackground: () => BackgroundItem[];
}
interface GenieServiceI {
  genieService: GenieService;
}

export type CharacterNames = "genie" | "tiger" | "lazy" | "hipster" | "base";
export type CharacterKeys =
  | "body"
  | "face"
  | "hair"
  | "top"
  | "pants"
  | "shoes"
  | "pattern"
  | "cap"
  | "accessories";

export type CharacterColors = {
  [key in CharacterKeys]?: string;
};

export interface CharacterItem extends CharacterColors {
  type: CharacterNames;
  id?: string;
  username?: string;
}

export interface ColorBase {
  colors: CharacterColors;
}

export type BackgroundNames =
  | "room"
  | "carpet"
  | "bed"
  | "stand"
  | "imac"
  | "floorW"
  | "floorT"
  | "music"
  | "chair"
  | "cat";

export type FurnitureKeys =
  | "wall"
  | "floor"
  | "primary"
  | "pattern"
  | "frame"
  | "pillow"
  | "book"
  | "imac"
  | "desk"
  | "chair"
  | "body"
  | "blanket";

export type FurnitureColors = {
  [key in FurnitureKeys]?: string;
};

export interface BackgroundItem extends FurnitureColors {
  type: BackgroundNames;
}

export interface FurnitureProps {
  colors: FurnitureColors;
}
export interface BackgroundProps {
  background: BackgroundItem[];
}

export interface GenieAttributes {
  dotori?: number;
  today?: string;
}

export interface MySpaceProps {
  genieService: GenieService;
}

export interface GenieRoomProps extends GenieServiceI, Alert, SettingProps {
  character: JSX.Element;
  background: BackgroundItem[];
  username: string;
  playList: MusicList[];
  stopMusic: (callback: MusicCallbackT) => void;
}

export interface CharacterInteractionProps extends CharacterProps {
  message: string;
  direction: { move: string } | undefined;
}
export interface CharacterProps {
  character: JSX.Element | undefined;
  xPos?: number;
}

export interface MenuProps
  extends MessageProps,
    MoveProps,
    SettingProps,
    MusicPlayerProps {
  stopMusic: (callback: MusicCallbackT) => void;
}

export interface SettingProps {
  onEdit: () => void;
}

export interface HomeIconProps {
  goHome: () => void;
}

export interface BackIconProps {
  goBack: () => void;
}

export type MusicCallbackT = () => void;
export interface MusicPlayerProps {
  playList: MusicList[];
  stopMusic?: (callback: MusicCallbackT) => void;
}

export interface MusicList {
  label: string;
  audioURL: string;
}

export interface MessageProps extends Alert, CharacterProps {
  defaultMessage: string;
  username: string;
  onMessageUpdate: (message: string) => void;
}

interface Alert {
  onAlert: (alertMsg: string, warning: boolean) => void;
}
export interface AlertProps extends AlertObject {
  onClose: () => void;
}

export interface AlertObject {
  alertMsg: string;
  warning: boolean;
}

export type Direction = "left" | "right" | "up" | "down";

export interface MoveProps {
  onMove: (dir: Direction) => void;
}

export interface MoveIconProps {
  onBtnClick: () => void;
}

interface UserAttributesI {
  attributes: UserAttributes;
}
export interface UserAttributes {
  createdAt: string;
  friends: Friends[];
  dotori: number;
  today: string;
  username: string;
  userMusic: MusicList[];
}

export type UserAttributesT = "friends" | "dotori" | "today";

export interface ItemCharacterViewerProps extends Alert {
  attributes: UserAttributes;
  item: CharacterItem;
  onEditMode?: () => void;
  onUpdate: (item: CharacterItem) => void;
  onMsgUpdate: (msg: string) => void;
}

export interface ItemBackgroundEditorProps {
  item: BackgroundItem;
  onClose: () => void;
  onUpdate: (item: BackgroundItem) => void;
}

export interface ItemCharacterEditorProps {
  item: CharacterItem;
  onClose: () => void;
  onUpdate: (item: CharacterItem) => void;
}

export type ItemEditorKeys = CharacterKeys & FurnitureKeys; //'wall', 'body'..
export type ItemNames = BackgroundNames | CharacterNames;
export interface AllItems extends CharacterColors, FurnitureColors {
  type: ItemNames;
}

export interface CustomProps extends Alert, BackgroundProps, GenieServiceI {
  attributes: UserAttributes;
  characterList: CharacterItem[];
  friends: Friends[];
  playList: MusicList[];
  onBackgroundUpdate: (updated: BackgroundItem) => void;
  onClose: () => void;
  onCharacterUpdate: (updated: CharacterItem) => void;
  onCharacterSelect: (characterItem: CharacterItem) => void;
  onMsgUpdate: (msg: string) => void;
}

export interface AttributeProps {
  src: any;
  message: string | number;
  editable: boolean;
  onAlert?: (alertMsg: string, warning: boolean) => void;
  onMsgUpdate?: (msg: string) => void;
}

export interface AttributeListProps extends UserAttributesI, Alert {
  onMsgUpdate: (msg: string) => void;
}

export interface ColorAttrProps {
  colorName: ItemEditorKeys;
  colorValue: string;
  onColorChange: (hexColor: string, colorName: ItemEditorKeys) => void;
}

export interface ColorEditorProps {
  colors: AllItems;
  onColorChange: (hexColor: string, colorName: ItemEditorKeys) => void;
}

type MenuTitleT = "Friends" | "Characters" | "Genieroom" | "Music";

export interface ExpandableProps {
  title: MenuTitleT;
  background?: BackgroundItem[];
  character?: CharacterItem[];
  friends?: Friends[];
  playList?: MusicList[];
  onCharacterSelect?: (characterItem: CharacterItem) => void;
  onCharacterSave?: (updated: CharacterItem) => void;
  onBackgroundSave?: (updated: BackgroundItem) => void;
  onViewExpand: () => void;
  setCloseCallback: (closeCallback: () => void) => void;
}

export interface ExpandableItemI {
  background?: BackgroundItem[];
  character?: CharacterItem[];
  friends?: Friends[];
  playList?: MusicList[];
}

export interface ExpandableItemProps {
  background?: BackgroundItem;
  buttonMsg: string | JSX.Element;
  component?: JSX.Element;
  componentColors?: BackgroundItem | CharacterItem | Friends;
  music?: Howl;
  label?: string;
  onItemClick?: () => void;
  onCharacterClick?: () => void;
  onBackgroundEdit?: () => void;
  onMusicClick?: (music: Howl) => void;
}

export interface Friends extends CharacterItem {
  username: string;
}

export interface PageLoaderProps {
  genieService: GenieService;
}

export interface MainProps {
  genieService: GenieService;
}

export interface ShopProps {
  genieService: GenieService;
}
export interface FilterExpandProps {
  onClose: () => void;
  onCategorySearch: (keyword: CategoryT) => void;
}

export type ProductT = {
  id: number;
  audioURL?: string;
  category: string;
  imageURL: string;
  price: number;
  productName: string;
  type: ItemNames;
};

export interface FilterProps {
  cart: number;
  wish: number;
  onKeywordSearch: (keyword: string) => void;
  onCategorySearch: (category: CategoryT) => void;
  scrollToTop: () => void;
}

export interface ProductListProps {
  list: ProductT[];
  onAddWish: (item: ProductT) => void;
  onAddCart: (item: ProductT) => void;
}

export interface ProductProps {
  product: ProductT;
  onAddWish: (item: ProductT) => void;
  onAddCart: (item: ProductT) => void;
}

export interface CartProps {
  genieService: GenieService;
}

export interface ProductThumbProps {
  product: ProductT;
  onRemoveProduct?: (id: number) => void;
}

export interface ReceiptProps {
  currDotori: number;
  ownedCharacters: CharacterItem[] | undefined;
  list: ProductT[];
  onCheckout: (dotori: number) => void;
}

export interface ReceiptItemProps {
  product: ProductT;
}

export interface WishProps {
  genieService: GenieService;
}

export interface SigninProps {
  authService: AuthService;
  // onAuthSuccess: (username: string) => void;
}

/*
type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};

type HeaderProps = WithChildren<{
  name: string;
}>;

*/
