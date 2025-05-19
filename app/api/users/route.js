import { NextResponse } from 'next/server';

// GET handler to fetch users
export async function GET() {
  // Mock data - in a real app, you would fetch from a database
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return NextResponse.json({ users });
}

// POST handler to create a new user
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // In a real app, you would save to a database
    // For demo, we'll just return the created user with a mock ID
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({ 
      message: 'User created successfully',
      user: newUser 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
} 