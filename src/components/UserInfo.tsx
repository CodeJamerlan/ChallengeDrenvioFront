import styles from './UserInfo.module.css'
import {useEffect, useState} from "react";
import { getUserById } from "../services/apiService";
import { User } from '../types/user';

const UserInfo = ({ userId } : {userId : string}) => {

  const [user, setUser] = useState<User>();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserById(userId);
        setUser(data);
        localStorage.setItem("user",JSON.stringify(data));
      } catch (error) {
        console.error("Error al obtener el usuario", error)
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div className={styles.containerinfouser}>
        <h3>Usuario: {user?.name}</h3>
    </div>
  )
};

export default UserInfo;


    

