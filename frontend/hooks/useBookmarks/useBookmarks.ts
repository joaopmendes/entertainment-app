import { useLocalStorage } from 'usehooks-ts';


type Bookmark = {
    title: string,
    isBookmarked: boolean
}
export const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>('bookmarks', []);

    const toggleBookmark = (bookmarkTitle: string) => {
        const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.title.toLowerCase() == bookmarkTitle.toLowerCase());
        const newBookmarks = [...bookmarks];
        // Item has been found
        if (bookmarkIndex != -1) {
            newBookmarks[bookmarkIndex].isBookmarked = !newBookmarks[bookmarkIndex].isBookmarked;
        } else {
            newBookmarks.push({ title: bookmarkTitle, isBookmarked: true });
        }

        setBookmarks(newBookmarks);
    };
    return {
        toggleBookmark,
        bookmarks,
    };
};