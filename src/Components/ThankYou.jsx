
import style from "../App.module.css";
import pix from "../assets/images/bg-sidebar-desktop.svg";
import thankyou from "../assets/images/icon-thank-you.svg";

export default function ThankYou({
  onChangePage1,
  onChangePage2,
  onChangePage3,
  onChangePage4
}) {
  return (
    <div className={style.container}>
      <div className={style.sideimg}>
        <img src={pix} alt="" />

        <div className={style.step}>
          <div className={style.steporder}>
            <div className={style.num}>
              <button onClick={onChangePage1}>1</button>
            </div>
            <div className={style.order}>
              <p>step 1</p>
              <span>your info</span>
            </div>
          </div>

          <div className={style.steporder}>
            <div className={style.num}>
              <button onClick={onChangePage2}>2</button>
            </div>
            <div className={style.order}>
              <p>step 2</p>
              <span>select plan</span>
            </div>
          </div>

          <div className={style.steporder}>
            <div className={style.num}>
              <button onClick={onChangePage3}>3</button>
            </div>
            <div className={style.order}>
              <p>step 3</p>
              <span>add-ons</span>
            </div>
          </div>

          <div className={style.steporder}>
            <div className={style.num}>
              <button className={style.nu} onClick={onChangePage4}>4</button>
            </div>
            <div className={style.order}>
              <p>step 4</p>
              <span>summary</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.thank}>
        <div>
          <img src={thankyou} alt="" />
        </div>

        <div className={style.you}>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
}
