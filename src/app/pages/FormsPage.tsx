import { useState, FormEvent } from "react";
import Navbar from "/Users/reynalddaffa/Downloads/FLIK MCA Website/src/imports/navbar.tsx";
import Footer from "/Users/reynalddaffa/Downloads/FLIK MCA Website/src/imports/footer.tsx";

function Title() {
  return (
    <div
      className="content-stretch flex items-end justify-between not-italic relative shrink-0 text-[#111928] w-full"
      data-name="Title"
    >
      <p className="capitalize font-w500 leading-[1.2] relative shrink-0 text-[40px] tracking-[-1px] w-[500px] whitespace-pre-wrap">
        {`Dimulai `}
        <br aria-hidden="true" />
        dari Obrolan
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-[430px] whitespace-pre-wrap">
        Setiap perjalanan bisnis dimulai dari percakapan yang tepat. Ceritakan
        kebutuhan, tantangan, atau rencanamu, kami siap mendengarkan.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center max-w-[1080px] relative shrink-0 w-full"
      data-name="Hero"
    >
      <Title />
    </div>
  );
}

type FormData = {
  fullName: string;
  businessName: string;
  website: string;
  phoneNumber: string;
  referralSource: string;
  helpNeeded: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function FormsPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    website: "",
    phoneNumber: "",
    referralSource: "",
    helpNeeded: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormData]?: boolean }>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Nama lengkap wajib diisi";
        if (value.trim().length < 3)
          return "Nama lengkap minimal 3 karakter";
        return "";

      case "businessName":
        if (!value.trim()) return "Nama bisnis wajib diisi";
        return "";

      case "website":
        if (!value.trim()) return "Instagram atau website wajib diisi";
        return "";

      case "phoneNumber":
        if (!value.trim()) return "Nomor telepon wajib diisi";
        if (!/^[\d\s\-+()]+$/.test(value))
          return "Format nomor telepon tidak valid";
        if (value.replace(/\D/g, "").length < 10)
          return "Nomor telepon minimal 10 digit";
        return "";

      case "referralSource":
        if (!value.trim()) return "Mohon beritahu kami dari mana kamu tau FLIK";
        return "";

      case "helpNeeded":
        if (!value.trim()) return "Mohon jelaskan apa yang bisa FLIK bantu";
        if (value.trim().length < 30)
          return "Deskripsi minimal 30 karakter";
        if (value.trim().length > 1000)
          return "Deskripsi maksimal 1000 karakter";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      businessName: true,
      website: true,
      phoneNumber: true,
      referralSource: true,
      helpNeeded: true,
    });

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          businessName: "",
          website: "",
          phoneNumber: "",
          referralSource: "",
          helpNeeded: "",
        });
        setTouched({});
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Forms"
    >
      <Navbar />

      <div
        className="content-stretch flex flex-col gap-[60px] items-center justify-center pb-0 pt-[60px] px-0 relative shrink-0 w-full"
        data-name="Body"
      >
        <Hero />

        <div
          className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center px-0 py-[40px] relative shrink-0 w-full"
          data-name="Form"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-[1080px] relative rounded-[20px] shrink-0 w-full"
            data-name="Container"
          >
            <div className="flex flex-col items-end justify-center max-w-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[40px] items-end justify-center max-w-[inherit] p-[40px] relative w-full">
                {/* Full Name Field */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="fullName"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">Nama Lengkap</p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.fullName && errors.fullName
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukkan nama lengkap kamu"
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.fullName && errors.fullName ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.fullName}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Contoh: Reynald Daffa Pahlevi
                      </p>
                    )}
                  </div>
                </div>

                {/* Business Name Field */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="businessName"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">Nama Bisnis</p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.businessName && errors.businessName
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukkan nama bisnis kamu"
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.businessName && errors.businessName ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.businessName}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Contoh: Bebek Goreng H. Guti
                      </p>
                    )}
                  </div>
                </div>

                {/* Website/Instagram Field */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="website"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">
                      Instagram Bisnis / Link Website
                    </p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.website && errors.website
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Website bisnis atau akun Instagram bisnis kamu"
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.website && errors.website ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.website}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Contoh: https://bebekhguti.id atau @bebek.h.guti
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number Field */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="phoneNumber"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">Nomor Telepon</p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.phoneNumber && errors.phoneNumber
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukin nomor telepon (whatsapp)"
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.phoneNumber && errors.phoneNumber ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.phoneNumber}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Contoh: 0812345678910
                      </p>
                    )}
                  </div>
                </div>

                {/* Referral Source Field */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="referralSource"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">Kamu Tau FLIK dari Siapa?</p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.referralSource && errors.referralSource
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <input
                        type="text"
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Masukin nama dan nama usaha nya ya (jika ada)."
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.referralSource && errors.referralSource ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.referralSource}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Contoh: Hernandez (JOKOPI)
                      </p>
                    )}
                  </div>
                </div>

                {/* Help Needed Field (Textarea) */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-name="Input Field / Standard / Default"
                >
                  <label
                    htmlFor="helpNeeded"
                    className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                  >
                    <p className="leading-[1.5]">Kamu Ingin FLIK Bantu Apa?</p>
                  </label>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="bg-white h-[200px] relative rounded-[6px] shrink-0 w-full">
                      <div
                        aria-hidden="true"
                        className={`absolute border ${
                          touched.helpNeeded && errors.helpNeeded
                            ? "border-red-500"
                            : "border-[#d1d5db]"
                        } border-solid inset-[-1px] pointer-events-none rounded-[7px]`}
                      />
                      <textarea
                        id="helpNeeded"
                        name="helpNeeded"
                        value={formData.helpNeeded}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jelasin secara singkat apa yang bisa FLIK bantu untuk kamu."
                        className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[6px] outline-none resize-none text-[#111928] placeholder:text-[#6b7280]"
                      />
                    </div>
                    {touched.helpNeeded && errors.helpNeeded ? (
                      <p className="font-w400 leading-[1.5] text-[14px] text-red-500">
                        {errors.helpNeeded}
                      </p>
                    ) : (
                      <p className="font-w400 leading-[1.5] text-[14px] text-[#6b7280]">
                        Maksimal adalah 30 - 1000 karakter.
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[200px] transition-all duration-300 ${
                    submitSuccess
                      ? "bg-green-600 cursor-default"
                      : isSubmitting
                      ? "bg-[#9D67E0] cursor-wait"
                      : "bg-[#701bc1] cursor-pointer hover:bg-[#4A1280]"
                  }`}
                  data-name="Button"
                >
                  <p className="font-w500 leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-pre">
                    {submitSuccess
                      ? "Terkirim! ✓"
                      : isSubmitting
                      ? "Mengirim..."
                      : "Kirim ke FLIK →"}
                  </p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
