import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return (
  <>
    <title>QuestionBank</title>
    <Component {...pageProps} />
  </>
)
}
