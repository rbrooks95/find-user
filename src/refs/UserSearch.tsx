import { useState, useRef, useEffect } from "react";

const users = [
  { name: "brooks", age: 25 },
  { name: "sandy", age: 20 },
  { name: "alex", age: 20 },
];
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLImageElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search </button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};
export default UserSearch;
