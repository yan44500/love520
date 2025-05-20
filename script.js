// 设置你们认识的那天
const firstDay = new Date("2025-04-13");
// 获取今天
const now = new Date();
// 算出相差的天数
const diff = Math.floor((now - firstDay) / (1000 * 60 * 60 * 24));
// 显示到网页中
document.getElementById("days").textContent = diff;

// 表白按钮的情话列表
function sayLove() {
  const messages = [
    "我超喜欢你！💌",
    "今天是我们认识的第 " + diff + " 天，我还是好想你。",
    "你是我每天最舍不得忽略的那个人。",
    "即使我们在不同城市，我的心也偷偷跑去找你了 🧭",
    "我不善言辞，但今天我也想认真说一声：520快乐 💕",
    "你出现的那天，春天真的来了。",
    "认识你的第 " + diff + " 天，我依然在心动。",
    "我想让你知道，这段感情我不是随便的 🐢",
    "虽然我不确定未来，但我珍惜现在的你。",
    "谢谢你送我520，我也偷偷准备了这个网页，希望你喜欢 🥺"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  alert(messages[randomIndex]);
}
