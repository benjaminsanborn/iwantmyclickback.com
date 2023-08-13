
import Link from 'next/link';

export default function Success() {
    return (
        <div>
            <h1>You are forgiven!</h1>
            <Link href="/">← Back to home</Link>
        </div>
    )
}
