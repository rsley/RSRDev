/*
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ Rafael Soley Robles                                                     │
  │ v1.0.0                                                                  │
  │                                                                         │
  │ Limited Source Software, see LICENSE.                                   │
  │ © All rights reserved.                                                  │
  │                                                                         │
  │ The above copyright notice and this permission shall be included in all │
  │ copies or substantial portions of the Software.                         │
  └─────────────────────────────────────────────────────────────────────────┘
 */

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center text-center mt-4 py-4 border-t border-white">
        <p className="text-xs text-agray-300">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://rsrdev.com"
            target="_blank"
            className="underline underline-offset-4 hover:text-agray-100"
          >
            Rafael Soley
          </a>
          . All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
