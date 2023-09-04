import Link from "next/link";

export default function Footer() {
    return (

        <footer className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Link href="/" legacyBehavior>
                        <span className="ml-3 text-xl">NeighborKim.com</span>
                    </Link>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023 NeighborKim —
                    <a
                        href="https://github.com/kimneighbor"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @kimneighbor
                    </a>
                </p>


                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">



                    {/*깃허브*/}
                    <a className="ml-3 text-gray-500" href="https://github.com/kimneighbor" target="_blank">
             <svg
                 fill="currentColor"
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 className="w-5 h-5"
                 viewBox="0 0 22 20"
             >

                <path
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477
                      0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0
                       2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409
                       0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0
                       1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
            </a>


                    {/*velog*/}
                    <a className="ml-3 text-gray-500" href="https://velog.io/@neighborkim" target="_blank">
                <svg className="w-5 h-5"
                     viewBox="0 0 192 192"
                     width="28"
                     fill="currentColor"
                     stroke="currentColor"
                >
                    <path id="Website"
                          d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"/>
                </svg>

            </a>


                    {/*인스타그램*/}
                    <a className="ml-3 text-gray-500"   href="https://instagram.com/kimneighbor" target="_blank">
              <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>

                    {/*        /!*링크드인 추후 업뎃*!/*/}
                    {/*        <a className="ml-3 text-gray-500">*/}
                    {/*  <svg*/}
                    {/*      fill="currentColor"*/}
                    {/*      stroke="currentColor"*/}
                    {/*      strokeLinecap="round"*/}
                    {/*      strokeLinejoin="round"*/}
                    {/*      strokeWidth="0"*/}
                    {/*      className="w-5 h-5"*/}
                    {/*      viewBox="0 0 24 24"*/}
                    {/*  >*/}
                    {/*    <path*/}
                    {/*        stroke="none"*/}
                    {/*        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"*/}
                    {/*    ></path>*/}
                    {/*    <circle cx="4" cy="4" r="2" stroke="none"></circle>*/}
                    {/*  </svg>*/}
                    {/*</a>*/}
          </span>
            </div>
        </footer>

    );
}
