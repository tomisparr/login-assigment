import style from "../App.module.css";
import pix from "../assets/images/bg-sidebar-desktop.svg";

export default function PersonalInfo({
  fullname,
  emailaddress,
  phonenumber,
  onChangeFullName,
  onChangeEmailAddress,
  onChangePhoneNumber,
  onChangePage1,
  onChangePage2,
  onChangePage3,
  onChangePage4,
  onNextSelectPlan,
}) {
  return (
    <div className={style.container}>
      <div className={style.sideimg}>
        <img src={pix} alt="landing picture"/>

        <div className={style.step}>
          <div className={style.steporder}>
            <div className={style.num}>
              <button className={style.nu} onClick={onChangePage1}>1</button>
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
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <form action="">
          <div className={style.details}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={fullname}
              placeholder="e.g. Stephen king"
              onChange={onChangeFullName}
            />
          </div>

          <div className={style.details}>
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              value={emailaddress}
              onChange={onChangeEmailAddress}
            />
          </div>

          <div className={style.details}>
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              value={phonenumber}
              onChange={onChangePhoneNumber}
            />
          </div>

          <button className={style.next} onClick={onNextSelectPlan}>Next Step</button>
        </form>
      </div>
    </div>
  );
}
