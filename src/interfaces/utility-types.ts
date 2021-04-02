// export interface GalleryImage {
//   original: string;
//   thumbnail?: string;
//   description?: string;
//   path: string;
// }
//
// export interface FeatureItem {
//   title: string;
//   description: string;
//   image: JSX.Element;
// }
//
// export interface ProductItem {
//   title: string;
//   description: string;
//   src: string;
// }

export interface MenuItem {
  title: string;
  path: string;
  image?: JSX.Element;
}

export interface AuthFields {
  email?: string | undefined,
  password?: string | undefined,
  confirmPassword?: string | undefined,
  name?: string | undefined
}

export interface ContactFields {
  email?: string | undefined,
  name?: string | undefined,
  tel?: string | undefined,
  message?: string | undefined,
}
