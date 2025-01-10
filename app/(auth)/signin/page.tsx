// // "use client"

// // import { useState } from "react";
// // import Link from "next/link";
// // // import { useRouter } from "next/router";

// // const metadata = {
// //   title: "Sign In - Open PRO",
// //   description: "Page description",
// // };

// // export default function SignIn() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e:any) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await fetch("http://localhost:4000/signin", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           workEmail: email,
// //           password: password,
// //         }),
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         setError(data.message || "An error occurred");
// //       } else {
// //         // router.push("/");
// //         console.log("Sign in successful:");
        
// //       }
// //     } catch (err) {
// //       setError("Erreur serveur, veuillez réessayer.");
// //       console.log(err)
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <section>
// //       <div className="mx-auto max-w-6xl px-4 sm:px-6">
// //         <div className="py-12 md:py-20">
// //           {/* Section header */}
// //           <div className="pb-12 text-center">
// //             <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
// //               Welcome back
// //             </h1>
// //           </div>
// //           {/* Contact form */}
// //           <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
// //             <div className="space-y-5">
// //               <div>
// //                 <label
// //                   className="mb-1 block text-sm font-medium text-indigo-200/65"
// //                   htmlFor="email"
// //                 >
// //                   Email
// //                 </label>
// //                 <input
// //                   id="email"
// //                   type="email"
// //                   className="form-input w-full"
// //                   placeholder="Your email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <div className="mb-1 flex items-center justify-between gap-3">
// //                   <label
// //                     className="block text-sm font-medium text-indigo-200/65"
// //                     htmlFor="password"
// //                   >
// //                     Password
// //                   </label>
// //                   <Link
// //                     className="text-sm text-gray-600 hover:underline"
// //                     href="/reset-password"
// //                   >
// //                     Forgot?
// //                   </Link>
// //                 </div>
// //                 <input
// //                   id="password"
// //                   type="password"
// //                   className="form-input w-full"
// //                   placeholder="Your password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //             </div>
// //             <div className="mt-6 space-y-5">
// //               <button
// //                 type="submit"
// //                 className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Signing in..." : "Sign in"}
// //               </button>
// //               {error && (
// //                 <div className="text-center text-sm text-red-500 mt-2">{error}</div>
// //               )}
// //               <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
// //                 or
// //               </div>
// //               <button className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
// //                 Sign In with Google
// //               </button>
// //             </div>
// //           </form>
// //           {/* Bottom link */}
// //           <div className="mt-6 text-center text-sm text-indigo-200/65">
// //             Don't you have an account?{" "}
// //             <Link className="font-medium text-indigo-500" href="/signup">
// //               Sign Up
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client"; // Mark the component as a client component

// import { useState } from "react";
// import Link from "next/link";
// // import { useRouter } from "next/router";

// const metadata = {
//   title: "Sign In - Open PRO",
//   description: "Page description",
// };

// export default function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch("http://localhost:4000/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           workEmail: email,
//           password: password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "An error occurred");
//       } else {
//         // router.push("/"); // Uncomment if using useRouter for redirect
//         console.log("Sign in successful:");
//         // Handle successful login (e.g., store token, redirect, etc.)
//       }
//     } catch (err) {
//       setError("Erreur serveur, veuillez réessayer.");
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section>
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           {/* Section header */}
//           <div className="pb-12 text-center">
//             <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//               Welcome back
//             </h1>
//           </div>
//           {/* Contact form */}
//           <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
//             <div className="space-y-5">
//               <div>
//                 <label
//                   className="mb-1 block text-sm font-medium text-indigo-200/65"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   className="form-input w-full"
//                   placeholder="Your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <div className="mb-1 flex items-center justify-between gap-3">
//                   <label
//                     className="block text-sm font-medium text-indigo-200/65"
//                     htmlFor="password"
//                   >
//                     Password
//                   </label>
//                   <Link
//                     className="text-sm text-gray-600 hover:underline"
//                     href="/reset-password"
//                   >
//                     Forgot?
//                   </Link>
//                 </div>
//                 <input
//                   id="password"
//                   type="password"
//                   className="form-input w-full"
//                   placeholder="Your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="mt-6 space-y-5">
//               <button
//                 type="submit"
//                 className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
//                 disabled={loading}
//               >
//                 {loading ? "Signing in..." : "Sign in"}
//               </button>
//               {error && (
//                 <div className="text-center text-sm text-red-500 mt-2">{error}</div>
//               )}
//               <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
//                 or
//               </div>
//               <button className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
//                 Sign In with Google
//               </button>
//             </div>
//           </form>
//           {/* Bottom link */}
//           <div className="mt-6 text-center text-sm text-indigo-200/65">
//             Don't you have an account?{" "}
//             <Link className="font-medium text-indigo-500" href="/signup">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"; 
import { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); 
  // const router = useRouter();

  // const handleNavigation = (path:any) => {
  //   router.push(path);
  // };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    try {
      const response = await fetch("https://app-devops-mulesoft.vercel.app/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workEmail: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "An error occurred");
      } else {
        setSuccessMessage("Sign in successful!"); 
        console.log("Sign in successful:", data);
        if(email=="admin@admin.com"){
        window.location.href = "/admin"; }
        else{
          window.location.href = "/client"; }
        }
      } catch (err) {
      setError("Erreur serveur, veuillez réessayer.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Welcome back
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-indigo-200/65"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-sm text-gray-600 hover:underline"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
              {error && (
                <div className="text-center text-sm text-red-500 mt-2">{error}</div>
              )}
              {successMessage && (
                <div className="text-center text-sm text-green-500 mt-2">{successMessage}</div> // Success message displayed here
              )}
              <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>
              <button className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">
                Sign In with Google
              </button>
            </div>
          </form>
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Don't you have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
