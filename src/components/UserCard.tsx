import { VFC } from "react";
import type { UserProfile } from "../types/UserProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const {
    user: { name, email, address }
  } = props;

  const style = {
    border: "solid 1px #CCC",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{name}</dd>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>住所</dt>
        <dd>{address}</dd>
      </dl>
    </div>
  );
};
