import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Revathy Mind Care",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#e8f4fd] to-[#f0f9f4] py-16 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-[#1e293b]">
          ⚖️ Privacy Policy
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Your privacy and confidentiality are our highest priority.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-14 space-y-6 text-gray-700 leading-relaxed">
        <p>
          <strong>Revathy Mind Care</strong> is committed to protecting the
          privacy and confidentiality of all clients.
        </p>
        <div className="bg-[#e8f4fd] border border-[#4A90E2]/20 rounded-2xl p-6">
          <h2 className="font-bold text-[#1e293b] text-lg mb-3">
            Confidentiality
          </h2>
          <p>
            All personal information shared during counselling sessions will
            remain <strong>strictly confidential</strong> and will not be
            disclosed to any third party without the client&apos;s consent,
            except where required by law or where there is a risk of harm to the
            client or others.
          </p>
        </div>
        <div className="bg-[#f0fdf4] border border-[#A8D5BA]/30 rounded-2xl p-6">
          <h2 className="font-bold text-[#1e293b] text-lg mb-3">
            Data Security
          </h2>
          <p>
            Client data is stored securely and accessed only by authorized
            professionals involved in providing counselling services. We
            implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access, loss,
            or misuse.
          </p>
        </div>
        <div className="bg-[#fefce8] border border-[#F4C430]/30 rounded-2xl p-6">
          <h2 className="font-bold text-[#1e293b] text-lg mb-3">Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of your
            personal data. For any privacy-related inquiries, please contact us
            at{" "}
            <a
              href="mailto:revathymindcare@gmail.com"
              className="text-[#4A90E2] underline"
            >
              revathymindcare@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
