import utilStyles from '../styles/utils.module.css';

export default function TopDomains() {
    return (
        <div>
            <table className={utilStyles.table}>
                <tr>
                    <th>Domain</th>
                    <th>Clicks Returned</th>
                </tr>
                <tr>
                    <td>forbes.com</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>msn.com</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>dailymail.co.uk</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>theblaze.com</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>slaynews.com</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>amazon.com</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>news.google.com</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>appleinsider.com</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>twitter.com</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>iwantmyclickback.com</td>
                    <td>1</td>
                </tr>
            </table>
            <i>Last updated: 2023-08-12 4:44pm EDT</i>
        </div>
    )
}
