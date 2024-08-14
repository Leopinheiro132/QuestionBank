import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return (
  <>
    <title>MetaConquista</title>
    <Component {...pageProps} />
  </>
)
}
