import Button from "../app/components/flik-button";

type CtaSectionProps = {
  title: string;        // bisa pake \n untuk line break
  description: string;  // text deskripsi
  buttonLabel: string;
  buttonTo: string;
  className?: string;   // optional override
};

export default function CtaSection({
  title,
  description,
  buttonLabel,
  buttonTo,
  className = "",
}: CtaSectionProps) {
  return (
    <section
      data-name="CTA"
      className={[
        "bg-[#f3f4f6]",
        "content-stretch flex flex-col gap-[60px] items-start justify-center",
        "p-[60px] relative shrink-0 w-[1080px]",
        className,
      ].join(" ")}
    >
      <div
        data-name="Text"
        className="content-stretch flex gap-[80px] items-start not-italic relative shrink-0 text-[#111928] w-[960px] whitespace-pre-wrap"
      >
        <p className="capitalize leading-[1.4] relative shrink-0 text-[40px] tracking-[-1px] w-[480px] whitespace-pre-wrap"
        style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 500}}>
          {title}
        </p>

        <p className="flex-[1_0_0] leading-[1.5] min-h-px min-w-px relative text-[18px] whitespace-pre-wrap"
        style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 400}}>
          {description}
        </p>
      </div>

      <div className="shrink-0 w-[250px]">
        <Button variant="primary" label={buttonLabel} to={buttonTo} />
      </div>
    </section>
  );
}
