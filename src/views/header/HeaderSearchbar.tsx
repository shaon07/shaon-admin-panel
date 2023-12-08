import { SearchBarIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/Header/searchbar.css";

export default function HeaderSearchBar() {
    return (
        <div className={`${styles.searchBarWrapper}`}>
            <form method="POST">
                <div className="relative">
                    <button className={`${styles.searchBarButton}`}>
                        <SearchBarIcon />
                    </button>

                    <input
                        type="text"
                        placeholder="Type to search..."
                        className={`${styles.searchInputBox}`}
                    />
                </div>
            </form>
        </div>
    )
}
