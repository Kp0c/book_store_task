import { IDiscount } from './../interfaces';

export abstract class BaseSeriesDiscount implements IDiscount {
  abstract get seriesLength(): number;
  abstract get discountValue(): number;

  howManyTimesCanApply(books: number[]): number {
    let virtualBooks = [...books];
    let timesGotBooks = 0;

    while (virtualBooks.filter((bookCount) => bookCount > 0).length >= this.seriesLength) {
      virtualBooks = this.booksAfterDiscountApplied(virtualBooks);

      timesGotBooks++;
    }

    return timesGotBooks;
  }

  apply(price: number, books: number[]): { price: number; updatedBooks: number[]; } {
    return {
      price: price * this.seriesLength * (1 - this.discountValue),
      updatedBooks: this.booksAfterDiscountApplied(books),
    };
  }

  private booksAfterDiscountApplied(books: number[]): number[] {
    const copiedBooks = [...books];

    let alreadyUsedIndexes: number[] = [];
    for (let bookNumber = 0; bookNumber < this.seriesLength; bookNumber++) {
      const index = this.getIndexOfHighestCountBook(books, alreadyUsedIndexes);
      alreadyUsedIndexes.push(index);

      copiedBooks[index]--;
    }

    return copiedBooks;
  }

  private getIndexOfHighestCountBook(books: number[], alreadyUsedIndexes: number[]): number {
    let maxCount = Number.NEGATIVE_INFINITY;
    let maxIndex: (number | null) = null;

    books.forEach((bookCount, index) => {
      if (bookCount > maxCount && !alreadyUsedIndexes.includes(index)) {
        maxCount = bookCount;
        maxIndex = index;
      }
    });

    if (maxIndex === null) {
      throw Error('Cannot find highest count book index');
    }

    return maxIndex;
  }

  private getMinBookCountForSeries(books: number[]): number {
    const booksLength = books.length;

    return [...books].sort()[booksLength - this.seriesLength];;
  }
}