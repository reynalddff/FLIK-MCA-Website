import { useState, FormEvent } from "react";

function TitleMobile() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full"
      data-name="Title mobile"
    >
      <p className="capitalize font-w500 leading-[1.2] relative shrink-0 text-[32px] tracking-[-0.8px] w-full whitespace-pre-wrap">
        {`Dimulai `}
        <br aria-hidden="true" />
        {`dari Obrolan`}
      </p>
      <p className="font-w400 leading-[1.6] relative shrink-0 text-[16px] text-[#111928] w-full whitespace-pre-wrap">
        Setiap perjalanan bisnis dimulai dari percakapan yang tepat. Ceritakan
        kebutuhan, tantangan, atau rencanamu, kami siap mendengarkan.
      </p>
    </div>
  );
}

function HeroMobile() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center px-[24px] relative shrink-0 w-full"
      data-name="Hero mobile"
    >
      <TitleMobile />
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

export default function FormMobile() {
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
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formatSubmittedDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const parts = formatter.formatToParts(date);
    const get = (type: Intl.DateTimeFormatPartTypes) =>
      parts.find((part) => part.type === type)?.value ?? "";
    return `${get("day")} / ${get("month")} / ${get("year")} - ${get(
      "hour",
    )} : ${get("minute")}`;
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Nama lengkap wajib diisi";
        if (value.trim().length < 3) return "Nama lengkap minimal 3 karakter";
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
        if (value.trim().length < 30) return "Deskripsi minimal 30 karakter";
        if (value.trim().length > 1000)
          return "Deskripsi maksimal 1000 karakter";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log("Form data:", formData);

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
    setSubmitError("");

    try {
      const submittedDate = formatSubmittedDate(new Date());
      const payload = new URLSearchParams({
        "Full name": formData.fullName,
        "Business Name": formData.businessName,
        "Help Needed": formData.helpNeeded,
        Link: formData.website,
        "Phone Number": formData.phoneNumber,
        "Referral Source": formData.referralSource,
        "Submitted Date": submittedDate,
      });

      await fetch("https://hooks.zapier.com/hooks/catch/26163917/uq8s0rw/", {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

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
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Maaf, terjadi kesalahan. Silahkan coba kembali.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setSubmitError("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Forms mobile"
    >
      <div
        className="content-stretch flex flex-col gap-[40px] items-center justify-center pb-0 pt-[40px] px-0 relative shrink-0 w-full"
        data-name="Body mobile"
      >
        <HeroMobile />

        <div
          className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center px-0 py-[32px] relative shrink-0 w-full"
          data-name="Form mobile"
        >
          <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white relative rounded-[20px] shrink-0 w-full"
              data-name="Container mobile"
            >
              <div className="flex flex-col items-end justify-center size-full">
                <div className="content-stretch flex flex-col gap-[28px] items-end justify-center p-[24px] relative w-full">
                  {submitSuccess ? (
                    <div className="w-full rounded-[12px] border border-green-200 bg-green-50 px-[16px] py-[12px] text-[14px] text-green-700">
                      Yeay! Pesan kamu berhasil terkirim. Tim kami segera
                      menghubungi kamu.
                    </div>
                  ) : null}
                  {submitError ? (
                    <div className="w-full rounded-[12px] border border-red-200 bg-red-50 px-[16px] py-[12px] text-[14px] text-red-700">
                      {submitError}
                    </div>
                  ) : null}
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Full Name"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">Nama Lengkap</p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.fullName && errors.fullName
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukkan nama lengkap kamu"
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Business Name"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">Nama Bisnis</p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.businessName && errors.businessName
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukkan nama bisnis kamu"
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Link"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">
                        Instagram Bisnis / Link Website
                      </p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.website && errors.website
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <input
                          type="text"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Website bisnis atau akun Instagram bisnis kamu"
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Phone Number"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">Nomor Telepon</p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.phoneNumber && errors.phoneNumber
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukin nomor telepon (whatsapp)"
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Referral Source"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">Kamu Tau FLIK dari Siapa?</p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.referralSource && errors.referralSource
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <input
                          type="text"
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Masukin nama dan nama usaha nya ya (jika ada)."
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-name="Input Field / Standard / Default"
                  >
                    <label
                      htmlFor="Help Needed"
                      className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full"
                    >
                      <p className="leading-[1.5]">
                        Kamu Ingin FLIK Bantu Apa?
                      </p>
                    </label>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white h-[200px] relative rounded-[8px] shrink-0 w-full">
                        <div
                          aria-hidden="true"
                          className={`absolute border ${
                            touched.helpNeeded && errors.helpNeeded
                              ? "border-red-500"
                              : "border-[#d1d5db]"
                          } border-solid inset-[-1px] pointer-events-none rounded-[9px]`}
                        />
                        <textarea
                          id="helpNeeded"
                          name="helpNeeded"
                          value={formData.helpNeeded}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Jelasin secara singkat apa yang bisa FLIK bantu untuk kamu."
                          className="w-full h-full px-[12px] py-[16px] font-w400 text-[16px] leading-[1.5] bg-transparent rounded-[8px] outline-none resize-none text-[#111928] placeholder:text-[#6b7280]"
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

                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`content-stretch flex h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full transition-all duration-300 ${
                      submitSuccess
                        ? "bg-green-600 cursor-default"
                        : isSubmitting
                          ? "bg-[#9D67E0] cursor-wait"
                          : "bg-[#701bc1] cursor-pointer hover:bg-[#4A1280]"
                    }`}
                    data-name="Button mobile"
                  >
                    {isSubmitting ? (
                      <span className="mr-[8px] inline-flex size-[16px] animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : null}
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
      </div>
    </div>
  );
}
