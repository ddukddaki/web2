const quotes = [
    {
        quote: "삶은 설계, 테스트, 변화와 실행의 연속이다.",
        author: "-미상-",
    },
    {
        quote: "오늘의 투자자는 어제의 성장으로 수익을 내지 않는다.",
        author: "-워렌버핏-",
    },
    {
        quote: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author: "-미상-",
    },
    {
        quote: "기회는 자기 소개서를 보내지 않는다.",
        author: "-미상-",
    },
    {
        quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
        author: "-미상-",
    },
    {
        quote: "연은 순풍이 아니라 역풍에 가장 높이 난다.",
        author: "-미상-",
    },
    {
        quote: "훌륭한 가르침은 1/4이 준비 과정, 3/4은 현장에서 이루어진다.",
        author: "-미상-",
    },
    {
        quote: "행동 없는 말은 이상주의를 훼손한다.",
        author: "-미상-",
    },
    {
        quote: "참된 스승은 제자들이 자신의 개인적 영향을 받지 않도록 방어한다.",
        author: "-미상-",
    },
    {
        quote: "배우나 생각하지 않으면 공허하고, 생각하나 배우지 않으면 위험하다",
        author: "-미상-",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;