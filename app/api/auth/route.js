import { NextResponse } from 'next/server';

// Handle POST requests for authentication (login)
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { username, password } = body;

    console.log('Received login request:', body);
    // Log the request method and URL for debugging
    console.log('Request method:', request.method);

    // Simple validation
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // This is where you would typically:
    // 1. Check credentials against a database
    // 2. Create a session or JWT token
    // 3. Return the token or session info

    // For demo purposes, we'll just check for a hardcoded user
    if (username === 'admin' && password === 'password') {
      return NextResponse.json({
        success: true,
        user: { id: 1, username, name: 'Admin User' },
        token: 'demo-jwt-token'
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

// Handle GET requests (e.g., for checking authentication status)
export async function GET() {
  return NextResponse.json({
    message: 'Authentication endpoint is working'
  });
}
