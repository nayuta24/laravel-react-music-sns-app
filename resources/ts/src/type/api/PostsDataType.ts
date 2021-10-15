export type PostsDataType = {
      id:string;
    created_at:string;
    updated_at:string;
    user: {
      id: string;
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
