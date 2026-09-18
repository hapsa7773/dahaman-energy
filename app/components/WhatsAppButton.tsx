"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919057034374?text=Hello%20Dahaman%20Energy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solar%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dahaman Energy on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.30)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_35px_rgba(37,211,102,0.40)]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.65 6.3L3 29l6.86-1.6A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.65c-2.06 0-4.08-.55-5.83-1.59l-.42-.25-4.07.95.97-3.97-.27-.43A10.94 10.94 0 1 1 16 26.65z" />
      </svg>
    </a>
  );
}