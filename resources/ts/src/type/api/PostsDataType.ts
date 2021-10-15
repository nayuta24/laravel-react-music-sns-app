export type PostsDataType = {
      id:number;
    created_at:string;
    updated_at:string;
    user: {
      id: number;
      img: string;
      name: string;
        job: string;
    };
    track: {
      id: string;
      img: string;
      artist: string;
      title: string;
        album: string;
        release: string
    };
    review: {
      star: number
      title: string;
      body: string;
    };
    reaction: {
      comment_val: number;
        like_val: number;
    }
}
