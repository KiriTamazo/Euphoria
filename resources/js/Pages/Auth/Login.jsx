/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(window.route('login'));
    };
    console.log(errors)
    return (
        // <div>Login</div>
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <InputLabel 
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="username"
                    isFocused={true}
                    errors={errors}
                    handleChange={(e) => setData('email', e.target.value)}
                    value={data.email} 
                    htmlFor="email"  wrapperClassName='mt-4'
                />
                <InputLabel 
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="username"
                    isFocused={true}
                    errors={errors}
                    handleChange={(e) => setData('password', e.target.value)}
                    value={data.password} 
                    htmlFor="password"  wrapperClassName='mt-4'
                />

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={window.route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4" disabled={processing}>
                    Log in
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
