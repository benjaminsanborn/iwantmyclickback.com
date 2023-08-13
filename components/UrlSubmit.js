import styles from './UrlSubmit.module.css'


function handleClick() {
  console.log("increment like count")
  //e.preventDefault();
  //button.classList.add('btn--clicked');
  //document.querySelectorAll('span').forEach((element) => { element.classList.add('expanded') })

  //setTimeout(() => { button.classList.remove("btn--clicked") }, 3500);
  //setTimeout(() => { document.querySelectorAll('span').forEach((element) => { element.classList.remove('expanded') }) }, 1700)
}


export default function UrlSubmit() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="urlsubmit"
      method="POST"
    >
      <input type="hidden" name="form-name" value="urlsubmit" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="url">Paste the complete URL below:</label>
      <input id="url" className={styles['form-field']} type="url" name="url" required />
      <button className={styles.button} type="submit">I wish I never clicked!</button>
    </form>
  )
}
