import OnProgress from "@/client/components/OnProgress"
import Main from "@/client/layouts/Main"

export default function Blog() {
    return (
        <Main addNavbarBuffer={false} addFooterBuffer={false}>
            <OnProgress />
        </Main>
    )
}