import { Link } from 'react-router-dom'
import { UserSignUpForm } from '@/components/auth/UserSignUpForm.tsx'

export const SignUp = () => {
  return (
    <>
      <div className="lg:p-8 w-full h-full place-content-center">
        <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Oh My Helper
            </h1>
            <p className="text-sm text-muted-foreground">
              欢迎注册Oh My Helper
            </p>
          </div>
          <UserSignUpForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
