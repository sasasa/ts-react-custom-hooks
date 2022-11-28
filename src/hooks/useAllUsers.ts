import { useState } from "react";
import type { UserProfile } from "../types/UserProfile";
import type { User } from "../types/api/User";
import axios from "axios";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fetchUsers = () => {
    setIsError(false);
    setIsLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.zipcode} ${user.address.city} ${user.address.suite} ${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch((err) => {
        setIsError(true);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    userProfiles,
    isLoading,
    isError,
    fetchUsers
  };
};
