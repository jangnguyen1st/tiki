const countTime = 3600;
let timeleft = countTime;

// định dạng thời gian thành giờ phút giây

// ? 100s = 0h : 1p : 40s
// 3600s = 1h : 0p : 0s
// 1p = 60s
// 10p = 600s
// 1h = 60 * 60  = 3600

// số giờ = số giây / 60p ( 3600s )

// 5400s = 1h dư 1800s = 1h , 30p, 0s

const formatTime = (seconds) => {
  /* Math.floor : phương thức lấy phần nguyên */
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  return ` <div class="time-flash-sale ps-3">
  <span>${hour.toString().padStart(2, "0")}</span>
  <b>:</b>
  <span>${min.toString().padStart(2, "0")}</span>
  <b>:</b>
  <span>${sec.toString().padStart(2, "0")}</span>
</div>`;
};

const updateElementTime = () => {
  const countElement = document.querySelector("#countime");
  countElement.innerHTML = formatTime(timeleft);
  timeleft--;

  if (timeleft < 0) {
    timeleft = countTime;
  }
};

setInterval(updateElementTime, 1000); // thực hiện hành động sau 1 khoảng thời gian nhất định

// padStart

// callback
// 3600 = 1h , 3600/3600 = 1h
// 7200 = 2h , 7200/3600 = 2h

// 7225s => 7225 chia 60 lay phan du

// 5400s => 3600s = 1h , dư 1810s / 60 => 30p , 10s

// => từ giay => gio va phut =>

// so nguyen / so nguyen thi chac chan phan du luon la so nguyen
