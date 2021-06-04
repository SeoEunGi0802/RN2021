connect(
    (state) => {
        return {
            books: state.bookReducer.books
        }
    }
)(Books)