export default async function Username({ params }: { params: Promise<{ username: string }> }) {
    const { username } = await params

    return (
        <div className="p-4">
            <p>{username}</p>
        </div>
    )
} 