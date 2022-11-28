import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
export default function App() {
  const { userProfiles, isLoading, isError, fetchUsers } = useAllUsers();
  const onClickFetchUser = () => {
    fetchUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {isError ? (
        <p style={{ color: "red" }}>エラーがありました</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        userProfiles.map((user) => <UserCard user={user} key={user.id} />)
      )}
    </div>
  );
}
