// Counter_30year.jsx
import { useState } from "react";
import "./Counter30.css";

function Counter_30year() {
  // 1. 기본 월 소득/지출
  const [salary, setSalary] = useState("");          // 월급
  const [passive, setPassive] = useState("");        // 불로소득
  const [allowance, setAllowance] = useState("");    // 용돈

  // 2. 고정지출 상세 항목
  const [rent, setRent] = useState("");              // 월세
  const [phone, setPhone] = useState("");            // 휴대폰
  const [electricity, setElectricity] = useState(""); // 전기세
  const [water, setWater] = useState("");            // 수도세
  const [gas, setGas] = useState("");                // 가스비
  const [maintenance, setMaintenance] = useState(""); // 관리비
  const [transport, setTransport] = useState("");    // 교통비
  const [etc1, setEtc1] = useState("");              // 보험비(기타1)
  const [etc2, setEtc2] = useState("");              // 기타2
  const [etc3, setEtc3] = useState("");              // 기타3

  // 3. 30년 복리 투자 계산
  const [rate, setRate] = useState("");        // 연 수익률(%)
  const [inflation, setInflation] = useState(""); // 인플레이션(%)
  const [future, setFuture] = useState(null);  // 30년 후 최종 금액

  // 4. 은퇴 자금 계산
  const [currentAge, setCurrentAge] = useState("");     // 현재 나이
  const [retireAge, setRetireAge] = useState("");       // 은퇴 나이
  const [retireLiving, setRetireLiving] = useState(""); // 은퇴 후 한달 생활비
  const [retireNeed, setRetireNeed] = useState(null);   // 필요한 은퇴자금

  // 고정지출 합계
  const fixedTotal =
    Number(rent || 0) +
    Number(phone || 0) +
    Number(electricity || 0) +
    Number(water || 0) +
    Number(gas || 0) +
    Number(maintenance || 0) +
    Number(transport || 0) +
    Number(etc1 || 0) +
    Number(etc2 || 0) +
    Number(etc3 || 0);

  // 월 잉여금 = (월급 + 불로소득) - 고정지출 - 용돈
  const incomeTotal = Number(salary || 0) + Number(passive || 0);
  const remain = incomeTotal - fixedTotal - Number(allowance || 0);

  // 30년 복리용 상수
  const years = 30;
  const months = years * 12;
  const principal = remain > 0 ? remain * months : 0;      // 30년간 납입 원금
  const profit = future !== null ? future - principal : 0; // 수익

  // 30년 후 예상금액 - 은퇴자금 차이
  const gap =
    future !== null && retireNeed !== null ? future - retireNeed : null;

  // 30년 복리 계산 (인플레이션 반영: 실질수익률 = (1+r)/(1+i) - 1)
  const handleCalcCompound = () => {
    if (!rate) {
      alert("연 수익률(%)을 입력해 주세요.");
      return;
    }
    if (remain <= 0) {
      alert("남는 돈이 0원 이하입니다.");
      return;
    }

    const monthly = remain;
    const yearRate = Number(rate) / 100; // 명목 연 수익률
    const inflYear = inflation ? Number(inflation) / 100 : 0; // 연 인플레이션

    let effectiveYearRate = yearRate;
    if (inflYear) {
      // 실질 연 수익률
      effectiveYearRate = (1 + yearRate) / (1 + inflYear) - 1;
    }

    const mRate = effectiveYearRate / 12; // 실질 월 수익률
    const n = months;

    if (mRate === 0) {
      setFuture(monthly * n);
      return;
    }

    const fv = monthly * ((Math.pow(1 + mRate, n) - 1) / mRate);
    setFuture(Math.floor(fv));
  };

  // 은퇴자금 계산: (120 - 은퇴나이)년 × 12개월 × 생활비
  const handleCalcRetire = () => {
    if (!currentAge || !retireAge || !retireLiving) {
      alert("현재 나이, 은퇴 나이, 은퇴 후 생활비를 모두 입력해 주세요.");
      return;
    }

    const now = Number(currentAge);
    const retire = Number(retireAge);
    const living = Number(retireLiving);

    if (isNaN(now) || isNaN(retire) || isNaN(living)) {
      alert("숫자만 입력해 주세요.");
      return;
    }

    if (retire <= now) {
      alert("은퇴 나이는 현재 나이보다 커야 합니다.");
      return;
    }

    if (retire >= 120) {
      alert("은퇴 나이는 120세 미만으로 입력해 주세요.");
      return;
    }

    const yearsAfter = 120 - retire; // 은퇴 이후 120세까지 년수
    const need = yearsAfter * 12 * living;

    setRetireNeed(need);
  };

  return (
    <div className="app-30">
      <div className="card-30">
        <h2 className="title-30">30년 저축 · 복리 계산기</h2>

        {/* 1. 기본 정보 입력 */}
        <section className="section-30">
          <h3 className="section-title">1. 기본 정보 입력</h3>

          {/* 월급 / 불로소득 / 용돈 한 줄 */}
          <div className="income-row">
            <div className="income-item">
              <label>월급</label>
              <div className="income-input-wrap">
                <input
                  type="number"
                  placeholder="예: 3,000,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="income-item">
              <label>불로소득</label>
              <div className="income-input-wrap">
                <input
                  type="number"
                  placeholder="예: 500,000"
                  value={passive}
                  onChange={(e) => setPassive(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="income-item">
              <label>용돈</label>
              <div className="income-input-wrap">
                <input
                  type="number"
                  placeholder="예: 300,000"
                  value={allowance}
                  onChange={(e) => setAllowance(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>
          </div>

          {/* 고정지출 상세 */}
          <div className="fixed-group">
            <div className="fixed-header">
              <span className="fixed-title">고정지출 상세</span>
              <span className="fixed-total">
                합계: {fixedTotal.toLocaleString()} 원
              </span>
            </div>

            <div className="fixed-row">
              <div className="fixed-item">
                <label>월세</label>
                <input
                  type="number"
                  placeholder="0"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
              <div className="fixed-item">
                <label>휴대폰</label>
                <input
                  type="number"
                  placeholder="0"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="fixed-row">
              <div className="fixed-item">
                <label>전기세</label>
                <input
                  type="number"
                  placeholder="0"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
              <div className="fixed-item">
                <label>가스비</label>
                <input
                  type="number"
                  placeholder="0"
                  value={water}
                  onChange={(e) => setWater(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="fixed-row">
              <div className="fixed-item">
                <label>관리비</label>
                <input
                  type="number"
                  placeholder="0"
                  value={gas}
                  onChange={(e) => setGas(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
              <div className="fixed-item">
                <label>교통비</label>
                <input
                  type="number"
                  placeholder="0"
                  value={maintenance}
                  onChange={(e) => setMaintenance(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="fixed-row">
              <div className="fixed-item">
                <label>자동차</label>
                <input
                  type="number"
                  placeholder="0"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
              <div className="fixed-item">
                <label>유류비</label>
                <input
                  type="number"
                  placeholder="0"
                  value={etc1}
                  onChange={(e) => setEtc1(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>

            <div className="fixed-row">
              <div className="fixed-item">
                <label>보험료</label>
                <input
                  type="number"
                  placeholder="0"
                  value={etc2}
                  onChange={(e) => setEtc2(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
              <div className="fixed-item">
                <label>기타</label>
                <input
                  type="number"
                  placeholder="0"
                  value={etc3}
                  onChange={(e) => setEtc3(e.target.value)}
                />
                <span className="unit">원</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 월 잉여금 */}
        <section className="section-30">
          <h3 className="section-title">2. 월 잉여금</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">월급</span>
              <span className="summary-value">
                {salary ? Number(salary).toLocaleString() : 0} 원
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">불로소득</span>
              <span className="summary-value">
                {passive ? Number(passive).toLocaleString() : 0} 원
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">고정지출 합계</span>
              <span className="summary-value">
                {fixedTotal.toLocaleString()} 원
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">용돈</span>
              <span className="summary-value">
                {allowance ? Number(allowance).toLocaleString() : 0} 원
              </span>
            </div>
            <div className="summary-item summary-main">
              <span className="summary-label">남는 돈 (월 저축 가능액)</span>
              <span className="summary-value main">
                {isNaN(remain) ? 0 : remain.toLocaleString()} 원
              </span>
            </div>
          </div>
        </section>

        {/* 3. 30년 복리 시뮬레이션 */}
        <section className="section-30">
          <h3 className="section-title">3. 30년 복리 시뮬레이션</h3>

          {/* 연 수익률 + 인플레이션 + 버튼 한 줄 */}
          <div className="rate-row">
            <div className="rate-input-wrap">
              <label>연 수익률</label>
              <div className="rate-inner">
                <input
                  type="number"
                  placeholder="예: 8"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <span className="unit">%</span>
              </div>
            </div>

            <div className="rate-input-wrap">
              <label>인플레이션</label>
              <div className="rate-inner">
                <input
                  type="number"
                  placeholder="예: 2"
                  value={inflation}
                  onChange={(e) => setInflation(e.target.value)}
                />
                <span className="unit">%</span>
              </div>
            </div>

            <button
              className="btn-calc btn-calc-inline"
              onClick={handleCalcCompound}
            >
              복리 계산
            </button>
          </div>

          {future !== null && (
            <div className="result-box">
              <div className="result-row">
                <span className="result-label">기간</span>
                <span className="result-value">
                  {years}년 ({months}개월)
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">월 저축액</span>
                <span className="result-value">
                  {remain.toLocaleString()} 원
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">총 원금</span>
                <span className="result-value">
                  {principal.toLocaleString()} 원
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">총 수익</span>
                <span className="result-value highlight">
                  {profit.toLocaleString()} 원
                </span>
              </div>
              <div className="result-row result-total">
                <span className="result-label">30년 후 예상 금액</span>
                <span className="result-value strong">
                  {future.toLocaleString()} 원
                </span>
              </div>
            </div>
          )}
        </section>

        {/* 4. 은퇴 자금 계산 */}
        <section className="section-30">
          <h3 className="section-title">4. 은퇴 자금 계산 (만 120세까지)</h3>

          {/* 현재나이 / 은퇴나이 / 은퇴후생활비 + 버튼 한 줄 */}
          <div className="retire-row">
            <div className="retire-item">
              <label>현재 나이</label>
              <div className="retire-input-wrap">
                <input
                  type="number"
                  placeholder="예: 36"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                />
                <span className="unit">세</span>
              </div>
            </div>

            <div className="retire-item">
              <label>은퇴 나이</label>
              <div className="retire-input-wrap">
                <input
                  type="number"
                  placeholder="예: 65"
                  value={retireAge}
                  onChange={(e) => setRetireAge(e.target.value)}
                />
                <span className="unit">세</span>
              </div>
            </div>

            <div className="retire-item">
              <label>은퇴 후 생활비</label>
              <div className="retire-input-wrap">
                <input
                  type="number"
                  placeholder="예: 3,000,000"
                  value={retireLiving}
                  onChange={(e) => setRetireLiving(e.target.value)}
                />
                <span className="unit">원/월</span>
              </div>
            </div>

            <div className="retire-button-wrap">
              <button
                className="btn-calc btn-calc-inline"
                onClick={handleCalcRetire}
              >
                은퇴 자금 계산
              </button>
            </div>
          </div>

          {retireNeed !== null && (
            <div className="result-box">
              <div className="result-row">
                <span className="result-label">은퇴 후 기간</span>
                <span className="result-value">
                  {120 - Number(retireAge)}년 (은퇴 {retireAge}세 → 120세)
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">월 생활비</span>
                <span className="result-value">
                  {Number(retireLiving).toLocaleString()} 원
                </span>
              </div>
              <div className="result-row result-total">
                <span className="result-label">필요 은퇴자금</span>
                <span className="result-value strong">
                  {retireNeed.toLocaleString()} 원
                </span>
              </div>
            </div>
          )}
        </section>

        {/* 5. 30년 후 자산 vs 은퇴자금 */}
        {gap !== null && (
          <section className="section-30">
            <h3 className="section-title">5. 30년 후 자산 vs 은퇴자금</h3>
            <div className="result-box">
              <div className="result-row">
                <span className="result-label">30년 후 예상 금액</span>
                <span className="result-value">
                  {future.toLocaleString()} 원
                </span>
              </div>
              <div className="result-row">
                <span className="result-label">필요 은퇴자금</span>
                <span className="result-value">
                  {retireNeed.toLocaleString()} 원
                </span>
              </div>
              <div className="result-row result-total">
                <span className="result-label">
                  차이 (30년 후 예상금액 - 은퇴자금)
                </span>
                <span
                  className={
                    gap >= 0 ? "result-value strong" : "result-value highlight"
                  }
                >
                  {gap.toLocaleString()} 원
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Counter_30year;
