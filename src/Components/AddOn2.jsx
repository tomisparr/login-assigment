import pix from "../assets/images/bg-sidebar-desktop.svg";
import arcade from "../assets/images/icon-arcade.svg";

import style from "../App.module.css";

export default function AddOn2({
  onBackAddOnPlan,
  onNextSummary,
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
              <button onClick={onChangePage2}>2</button>
            </div>
            <div className={style.order}>
              <p>step 2</p>
              <span>select plan</span>
            </div>
          </div>

          <div className={style.steporder}>
            <div className={style.num}>
              <button className={style.nu} onClick={onChangePage3}>
                3
              </button>
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
          <h1>Pick add-ons</h1>
          <p>Add-ons helps your gaming experience</p>
        </div>

        <div className={style.boxcontainer}>
          <div className={style.box}>
            <div>
              <input className={style.in} type="checkbox" />
            </div>

            <div className={style.type}>
              <h3>Online Service</h3>
              <p>Access to multiplayer games</p>
            </div>

            <div className={style.price}>
              <p>+$10/yr</p>
            </div>
          </div>

          <div className={style.box}>
            <div>
              <input className={style.in} type="checkbox" />
            </div>

            <div className={style.type}>
              <h3>Larger Storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>

            <div className={style.price}>
              <p>+$20/yr</p>
            </div>
          </div>

          <div className={style.box}>
            <div>
              <input className={style.in} type="checkbox" />
            </div>

            <div className={style.type}>
              <h3>Cutomizable Profile</h3>
              <p>Custom theme on your profile</p>
            </div>

            <div className={style.price}>
              <p>+$20/yr</p>
            </div>
          </div>
        </div>

        <div className={style.addbutton}>
          <button className={style.back} onClick={onBackAddOnPlan}>
            Go Back
          </button>
          <button className={style.next} onClick={onNextSummary}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
