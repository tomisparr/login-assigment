import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import pix from "../assets/images/bg-sidebar-desktop.svg";

import style from "../App.module.css";

export default function SelectPlan({ 
onBackPersonalInfo,
onNextAddOns,
onChangePage1,
onChangePage2,
onChangePage3,
onChangePage4,
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
              <button className={style.nu} onClick={onChangePage2}>2</button>
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
              <button onClick={onChangePage4}>4</button>
            </div>
            <div className={style.order}>
              <p>step 4</p>
              <span>summary</span>
            </div>
          </div>
          </div>


      </div>

      <div className={style.personal}>
        <div className={style.info}>
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </div>

        <div className={style.select}>
          <div className={style.plan}>
            <img src={arcade} alt="" />

            <div className={style.det}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>

          <div className={style.plan}>
            <img src={advanced} alt="" />

            <div className={style.det}>
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
          </div>

          <div className={style.plan}>
            <img src={pro} alt="" />

            <div className={style.det}>
              <h3>Pro</h3>
              <p>$15/mo</p>
            </div>
          </div>
        </div>

        <div className={style.select1}>
          <div className={style.plan}>
            <img src={arcade} alt="" />

            <div className={style.det}>
              <h3>Arcade</h3>
              <p>$9/mo</p>
            </div>
          </div>

          <div className={style.plan}>
            <img src={advanced} alt="" />

            <div className={style.det}>
              <h3>Advanced</h3>
              <p>$12/mo</p>
            </div>
          </div>

          <div className={style.plan}>
            <img src={pro} alt="" />

            <div className={style.det}>
              <h3>Pro</h3>
              <p>$15/mo</p>
            </div>
          </div>
        </div>

        <div className={style.button}>
          <button className={style.ba} onClick={onBackPersonalInfo}>
            Go Back
          </button>
          <button className={style.next} onClick={onNextAddOns}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
