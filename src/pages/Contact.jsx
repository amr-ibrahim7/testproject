import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";
import { TbArrowUpLeft } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
//   const [agreed, setAgreed] = useState(false);

  // Generate unique ids for the inputs
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();
  // Using useCallback to improve performance
//   const handleAgreedChange = useCallback(() => {
//     setAgreed((prev) => !prev);
//   }, []);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          تواصل معنا
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          سواء كانت لديك أسئلة أو تعليقات أو فرص للتعاون، فلا تتردد في ملء نموذج
          الاتصال أدناه أو التواصل معنا مباشرة عبر البريد الإلكتروني. ونحن
          ملتزمون بالرد عليك في أقرب وقت ممكن.
        </p>
      </div>

      <form action="" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <label htmlFor={nameId} className="sr-only">
              الاسم
            </label>
            <Input type="text" id={nameId} placeholder="الاسم" />
          </div>
          <div className="mt-2.5">
            <label htmlFor={phoneId} className="sr-only">
              رقم الهاتف
            </label>
            <Input type="tel" id={phoneId} placeholder="رقم الهاتف " />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={emailId} className="sr-only">
              البريد الإلكتروني
            </label>
            <Input type="email" id={emailId} placeholder="البريد الإلكتروني" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={messageId} className="sr-only">
              ادخل سؤالك
            </label>
            <Textarea id={messageId} placeholder="ادخل سؤالك.... " />
          </div>

          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                className={classNames(
                  agreed ? "bg-primary" : "bg-gray-200",
                  "flex w-9 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
                checked={agreed}
                onChange={handleAgreedChange}
              >
                <span className="sr-only">الموافقة على السياسات</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "-translate-x-5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              من خلال تحديد هذا، فإنك توافق على جميع الشروط..{" "}
              <a href="#" className="font-semibold text-primary">
                الشروط والاحكام
              </a>
            </Switch.Label>
          </Switch.Group> */}

          <div className="mt-10">
            <Button
              type="submit"
              className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              ارسال الان!{" "}
              <TbArrowUpLeft className="w-5 h-5 mr-2" aria-label="ارسال" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
