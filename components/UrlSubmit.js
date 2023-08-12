import styles from './UrlSubmit.module.css'

export default function UrlSubmit() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="urlsubmit"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="urlsubmit" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlForm="url">URL</label>
      <input id="url" className={styles['form-field']} type="text" name="url" />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  )
}
