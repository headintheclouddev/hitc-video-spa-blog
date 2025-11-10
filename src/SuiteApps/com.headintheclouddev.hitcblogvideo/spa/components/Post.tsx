export default function Post(props: IPost) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>{props.content}</div>
      <br />
      <i>Written by <b>{props.author}</b></i>
    </div>
  )
}

export interface IPost {
  title: string;
  content: string;
  author: string;
}
