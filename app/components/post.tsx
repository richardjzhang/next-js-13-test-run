import dayjs from "dayjs";

export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  owner: {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  };
}

function Post(props: Post) {
  const { image, owner, publishDate, text } = props;
  return (
    <div>
      <img className="mb-2 w-full h-80 object-cover rounded-2xl" src={image} />
      <div className="text-sm text-gray-500 font-semibold">
        {dayjs(publishDate).format("MMMM DD YYYY")}
      </div>
      <div className="truncate capitalize text-lg font-semibold">{text}</div>
    </div>
  );
}

export default Post;
