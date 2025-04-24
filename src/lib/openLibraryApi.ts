export async function fetchOpenLibraryBooks(search: string) {
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(search)}`)
  const data = await res.json()
  console.log("DATA", data);
  // return data.docs.slice(0, 20).map((doc: any) => ({
  //   id: doc.key,
  //   title: doc.title,
  //   author: doc.author_name?.[0] || "Unknown",
  //   coverUrl: doc.cover_i
  //     ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
  //     : '',
  //   description: doc.first_sentence?.[0] || '',
  // }));
}