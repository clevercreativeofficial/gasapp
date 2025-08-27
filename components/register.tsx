'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [password, setPassword] = useState("");
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailOrMobileValid, setIsEmailOrMobileValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isBirthdayValid, setIsBirthdayValid] = useState(true);
    const [isGenderValid, setIsGenderValid] = useState(true);
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [gender, setGender] = useState("");
    const [serverError, setServerError] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isValid = true;

        // Validate firstName
        if (!firstName.trim()) {
            setIsFirstNameValid(false);
            isValid = false;
        } else {
            setIsFirstNameValid(true);
        }

        // Validate lastName
        if (!lastName.trim()) {
            setIsLastNameValid(false);
            isValid = false;
        } else {
            setIsLastNameValid(true);
        }

        // Validate email or mobile
        if (!emailOrMobile.trim()) {
            setIsEmailOrMobileValid(false);
            isValid = false;
        } else {
            setIsEmailOrMobileValid(true);
        }

        // Validate password
        if (!password.trim()) {
            setIsPasswordValid(false);
            isValid = false;
        } else {
            setIsPasswordValid(true);
        }

        // Validate Birthday
        if (!year.trim() || !month.trim() || !day.trim()) {
            setIsBirthdayValid(false);
            isValid = false;
        } else {
            setIsBirthdayValid(true);
        }

        // Validate gender
        if (!gender.trim()) {
            setIsGenderValid(false);
            isValid = false;
        } else {
            setIsGenderValid(true);
        }

        if (!isValid) return;

        console.log("Form submitted:", { firstName, lastName, emailOrMobile, password, year, month, day, gender });
        // For example, you can make an API call here
        setServerError(true)
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "firstName") {
            setFirstName(value);
            if (value.trim() !== '') {
                setIsFirstNameValid(true);
            }
        } else if (name === "lastName") {
            setLastName(value);
            if (value.trim() !== '') {
                setIsLastNameValid(true);
            }
        } else if (name === "emailOrMobile") {
            setEmailOrMobile(value);
            if (value.trim() !== '') {
                setIsEmailOrMobileValid(true);
            }
        } else if (name === "password") {
            setPassword(value);
            if (value.trim() !== '') {
                setIsPasswordValid(true);
            }
        }
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(event.target.value);
        setMonth(""); // Reset month when year changes
        setDay("");   // Reset day when year changes

        if (event.target.value.trim() !== '') {
            setIsBirthdayValid(true);
        }
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(event.target.value);
        setDay(""); // Reset day when month changes

        if (event.target.value.trim() !== '') {
            setIsBirthdayValid(true);
        }
    };

    const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDay(event.target.value);

        if (event.target.value.trim() !== '') {
            setIsBirthdayValid(true);
        }
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
        setIsGenderValid(true);
    };

    const getDaysInMonth = (year: string, month: string) => {
        const yearNum = parseInt(year, 10);
        const monthNum = parseInt(month, 10);
        return new Date(yearNum, monthNum, 0).getDate();
    };

    const days = month && year ? Array.from({ length: getDaysInMonth(year, month) }, (_, i) => i + 1) : [];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
      <div className="max-w-sm flex items-center justify-center border">
        <div className="container flex items-center justify-between">
          <div className="px-2 py-6 ">
            <h1 className='font-bold text-3xl text-accent'>
              Sign Up
            </h1>
            <p className='text-lg text-foreground mb-6'>Its easy and quick</p>

            {/* Server validation */}
            {serverError && (
            <div className="p-4 bg-red-100 text-red-950 border border-red-300 text-sm mb-4">
              Sorry, an unknown error occurred, please try again later.
            </div>
            )}

            <form onSubmit={handleSubmit} className='text-foreground min-h-60 overflow-y-auto'>
              <div className="flex sm:flex-row flex-col gap-2 mb-2">
                <div className="flex flex-col">
                  <Input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className={`w-full p-4 outline-none bg-secondary focus:border-accent border ${!isFirstNameValid ? 'border-red-500' : 'border-secondary'} text-foreground rounded-lg`}
                  />
                  {!isFirstNameValid && <small className="text-red-500">Please enter first name.</small>}
                </div>

                <div className="flex flex-col">
                  <Input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className={`w-full p-4 outline-none bg-secondary focus:border-accent border ${!isLastNameValid ? 'border-red-500' : 'border-secondary'} text-foreground rounded-lg`}
                  />
                  {!isLastNameValid && <small className="text-red-500">Please enter last name.</small>}
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <Input
                  type="text"
                  name="emailOrMobile"
                  value={emailOrMobile}
                  onChange={handleInputChange}
                  placeholder="Mobile number or email"
                  className={`w-full p-4 outline-none bg-secondary focus:border-accent border ${!isEmailOrMobileValid ? 'border-red-500' : 'border-secondary'} text-foreground rounded-lg`}
                />
                {!isEmailOrMobileValid && <small className="text-red-500">Please enter email or mobile number.</small>}
              </div>

              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="New password"
                className={`w-full p-4 outline-none bg-secondary focus:border-accent border ${!isPasswordValid ? 'border-red-500' : 'border-secondary'} text-foreground rounded-lg`}
              />
              {!isPasswordValid && <small className="text-red-500">Please enter a new password.</small>}

              <label className='block text-sm my-2' htmlFor="year">Birthday</label>
              <div className="flex gap-2">
                <div className="flex flex-col w-full">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col w-full">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col w-full">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((d) => (
                        <SelectItem key={d} value={d.toString().padStart(2, "0")}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {!isBirthdayValid && <small className="text-red-500">Please enter a valid date.</small>}

              {/* <label htmlFor="gender">Gender</label> */}
              <div className="flex gap-10 mt-2">
                <div
                  className={`input flex items-center gap-2 justify-center ${
                    !isGenderValid ? "input-error" : ""
                  }`}
                >
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="male"
                    onChange={handleGenderChange}
                    className='accent-primary-500'
                  />
                </div>
                <div
                  className={`input flex gap-2 ${
                    !isGenderValid ? "input-error" : ""
                  }`}
                >
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="female"
                    onChange={handleGenderChange}
                    className='accent-primary-500'
                  />
                </div>
              </div>
              {!isGenderValid && <small className="text-red-500">Please select your gender.</small>}

              <small className='block my-2'>
                By clicking Sign Up, you agree to our{" "}
                <Link className="text-primary-500" href="/">
                  Terms, Privacy and Policy
                </Link>{" "}
                and{" "}
                <Link className="text-primary-500" href="/">
                  Cookies Policy.
                </Link>
                You may receive SMS notifications from us and can opt out any
                time.
              </small>
              <Button>Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register;