

export default async function Surahs({

    searchParams
}: {

    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

    const filters: { [key: string]: string | string[] | undefined } = await searchParams


    return (
        <div>
            <h1>{JSON.stringify(filters)}</h1>
            <h1>Surahs</h1>
        </div>
    )
}