export default function FAQ() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="divide-y divide-gray-300">
        {/* FAQ 1 */}
        <details className="group py-4">
          <summary className="flex justify-between items-center cursor-pointer text-[#3D4E24] font-semibold list-none text-2xl">
            How it works - Subscribe and get started
            <span className="transition-transform group-open:rotate-180">
              ▼
            </span>
          </summary>
          <p className="mt-2 text-gray-600 text-sm">
            Subscribe to YogaEasy, and you'll instantly get access to all our
            classes and programs. Start your journey today and practice anytime,
            anywhere.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="group py-4">
          <summary className="flex justify-between items-center cursor-pointer text-[#3D4E24] font-semibold list-none text-2xl">
            What's included in my subscription?
            <span className="transition-transform group-open:rotate-180">
              ▼
            </span>
          </summary>
          <p className="mt-2 text-gray-600 text-sm">
            Your subscription includes unlimited access to all yoga videos,
            programs, and new weekly content.
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="group py-4">
          <summary className="flex justify-between items-center cursor-pointer text-[#3D4E24] font-semibold list-none text-2xl">
            On which platforms can I use YogaEasy?
            <span className="transition-transform group-open:rotate-180">
              ▼
            </span>
          </summary>
          <p className="mt-2 text-gray-600 text-sm">
            YogaEasy is available on desktop, tablet, and mobile devices through
            your browser or app.
          </p>
        </details>

        {/* FAQ 4 */}
        <details className="group py-4">
          <summary className="flex justify-between items-center cursor-pointer text-[#3D4E24] font-semibold list-none text-2xl">
            Do I need to renew my subscription?
            <span className="transition-transform group-open:rotate-180">
              ▼
            </span>
          </summary>
          <p className="mt-2 text-gray-600 text-sm">
            Your subscription renews automatically at the regular rate.
            Discounts, if applicable, apply only to the first term. Cancel
            anytime up to one day before the end of the term to avoid the next
            charge.For more
        details, please refer to our{" "}
        <a href="#" className="text-blue-600 underline">
          terms and conditions here
        </a>.
          </p>
        </details>
      </div>

      
    </div>
  );
}
