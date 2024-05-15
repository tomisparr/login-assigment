import style from "../App.module.css";

import pix from "../assets/images/bg-sidebar-desktop.svg";

export default function Summary({ onBackAddOn,
onNextSummaryPage,
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

      <div className={style.personal}>
        <div className={style.info}>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>

        <div className={style.de}>
          <div className={style.deta}>
            <div>
              <h3>Arcade(Yearly)</h3>
              <p>
                <a href="">Change</a>
              </p>
            </div>

            <p className={style.pr}>$9/mo</p>
          </div>

          <div className={style.deta}>
            <div>
              <h3>Online Service(Yearly)</h3>
              <p></p>
            </div>

            <p>$1/mo</p>
          </div>

          <div className={style.deta}>
            <div>
              <h3>Larger Storage(Yearly)</h3>
              <p></p>
            </div>

            <p>$2/mo</p>
          </div>
        </div>

        <div className={style.total}>
          <p>Total (per year)</p>
          <span>$12/mo</span>
        </div>

        <div className={style.button}>
          <button className={style.back} onClick={onBackAddOn}>
            Go Back
          </button>
          <button className={style.next} onClick={onNextSummaryPage}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
