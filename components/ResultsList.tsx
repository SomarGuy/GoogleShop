import { PageResult } from "@/typings";  // Make sure the import path is correct
import Link from "next/link";

type Props = {
    results: PageResult[];
    term: string;
};

function ResultsList({ results, term }: Props) {
    return (
        <div className="flex md:px-5">
            <div className="w-36 md:w-64">
                {results.map((pageResult, i) => (
                    <div className="space-y-2">
                        {pageResult.content.results.filters?.map((filter) => (
                            <div className="border rounded-r-lg md:rounded-lg p-5">
                                {filter.values.map((value) => (
                                    <div key={value.url}>
                                        <Link
                                            href={`https://www.google.com${value.url}`}
                                            prefetch={false}
                                        >
                                            {value.value}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResultsList;
