export interface Photo {
  id: string;
  blur_hash: string,
  alt_description: string;
  links:{
    download:string,
  }
  urls: {
    small: string;
  };
  user: {
    username: string;
  };
  likes: number;
}

export interface SinglePhoto{
  id: string,
  alt_description: string,
  likes:number,
  views: number,
  downloads: number,
  links: {
    download: string,
  },
  urls:{
    regular:string,
    small:string,
  }
  created_at: string,
  user: {
    instagram_username: string,
    name: string,
    username: string,
    total_photos: number,
    id: string,
    profile_image:{
      large:string,
    }
  }
}
